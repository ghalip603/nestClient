export default () => {
  return {
    db: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    typeOrm: {
      synchronize: parseBoolean(process.env.TYPEORM_SYNCHRONIZE),
      autoLoadEntities: parseBoolean(process.env.TYPEORM_AUTO_LOAD_ENTITIES),
    },
  };
};

function parseBoolean(value: string | undefined): boolean | undefined {
  if (value !== undefined) {
    try {
      return JSON.parse(value.toLowerCase()) as boolean;
    } catch (error) {
      console.error(`Error parsing boolean value: ${value}`);
    }
  }
  return undefined;
}
