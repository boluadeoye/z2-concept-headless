export async function getCategoryIdBySlug(slug: string) {
  const ck = process.env.WC_CONSUMER_KEY;
  const cs = process.env.WC_CONSUMER_SECRET;
  const baseUrl = process.env.WC_SITE_URL || 'https://sleigh.staymedia.ng';
  const auth = `consumer_key=${ck}&consumer_secret=${cs}`;

  try {
    const res = await fetch(`${baseUrl}/wp-json/wc/v3/products/categories?slug=${slug}&${auth}`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const categories = await res.json();
    return categories.length > 0 ? categories[0].id : null;
  } catch (e) {
    console.error("Category Resolver Error:", e);
    return null;
  }
}

export async function getWooProducts(categorySlug?: string) {
  const ck = process.env.WC_CONSUMER_KEY;
  const cs = process.env.WC_CONSUMER_SECRET;
  const baseUrl = process.env.WC_SITE_URL || 'https://sleigh.staymedia.ng';

  try {
    const url = new URL(`${baseUrl}/wp-json/wc/v3/products`);
    url.searchParams.append('consumer_key', ck || '');
    url.searchParams.append('consumer_secret', cs || '');
    url.searchParams.append('per_page', '12');
    url.searchParams.append('status', 'publish');

    if (categorySlug) {
      const categoryId = await getCategoryIdBySlug(categorySlug);
      if (!categoryId) return [];
      url.searchParams.append('category', categoryId.toString());
    }

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    console.error("WooCommerce Fetch Error:", e);
    return [];
  }
}

export async function getSingleProduct(id: string) {
  const ck = process.env.WC_CONSUMER_KEY;
  const cs = process.env.WC_CONSUMER_SECRET;
  const baseUrl = process.env.WC_SITE_URL || 'https://sleigh.staymedia.ng';
  const auth = `consumer_key=${ck}&consumer_secret=${cs}`;

  try {
    const res = await fetch(`${baseUrl}/wp-json/wc/v3/products/${id}?${auth}`, {
      next: { revalidate: 60 },
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (!res.ok) return null;
    const product = await res.json();
    return product;
  } catch (e) {
    console.error("Single Product Fetch Error:", e);
    return null;
  }
}
