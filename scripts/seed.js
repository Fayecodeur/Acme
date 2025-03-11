const { db } = require("@vercel/postgres");

async function main() {
  const client = await db.connect();
  console.log(client);

  // fonction pour créer la table users et lui injecter la data

  await client.end();
}

main().catch((err) => {
  console.log("Une erreur s'est produite", err);
});
