module.exports = {
  development: {
    client: "mysql",
    useNullAsDefault: true,
    connection: {
      host: "localhost",
      user: "myuser",
      password: "mypassword",
      database: "mydb",
    }
  }
};
