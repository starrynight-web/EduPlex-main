export default function Head() {
  const siteUrl = "https://eduplex-diu.unleft.space";
  return (
    <>
      <title>Eduplex - DIU Student Platform</title>
      <meta
        name="description"
        content="A comprehensive platform for Daffodil International University students - SWE, NFE & English Departments."
      />

      {/* ✅ Open Graph meta tags */}
      <meta property="og:title" content="Eduplex - DIU Student Platform" />
      <meta
        property="og:description"
        content="Platform for DIU Students - SWE, NFE & English Departments."
      />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Eduplex" />

      {/* ✅ Twitter card (for X / WhatsApp fallback) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Eduplex - DIU Student Platform" />
      <meta
        name="twitter:description"
        content="Platform for DIU Students - SWE, NFE & English Departments."
      />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Favicon (optional) */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

