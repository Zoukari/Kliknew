const SANITY_ORIGIN = 'https://ilu5dvrl.apicdn.sanity.io';

/**
 * Proxy Sanity API requests to avoid CORS in production.
 * Forwards /api/sanity/* to https://ilu5dvrl.apicdn.sanity.io/*
 */
export default async function handler(req, res) {
  // req.url is path + query (e.g. /api/sanity/v2024-01-01/data/query/production?query=...)
  const pathAndQuery = req.url || '';
  const queryStart = pathAndQuery.indexOf('?');
  const pathOnly = queryStart >= 0 ? pathAndQuery.slice(0, queryStart) : pathAndQuery;
  const queryString = queryStart >= 0 ? pathAndQuery.slice(queryStart) : '';
  const path = pathOnly.replace(/^\/api\/sanity\/?/, '').replace(/^\/+/, '') || '';
  const target = `${SANITY_ORIGIN}/${path}${queryString}`;

  try {
    const response = await fetch(target, {
      method: req.method || 'GET',
      headers: {
        Accept: req.headers?.accept || 'application/json',
        'Content-Type': req.headers?.['content-type'] || 'application/json',
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
    });

    const data = await response.text();
    const contentType = response.headers.get('Content-Type') || 'application/json';
    res.status(response.status).setHeader('Content-Type', contentType);
    res.end(data);
  } catch (err) {
    console.error('Sanity proxy error:', err);
    res.status(502).json({ error: 'Sanity API proxy failed', message: err.message });
  }
}
