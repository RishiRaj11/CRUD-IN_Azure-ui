export const msalConfig = {
    auth: {
      clientId: 'f00fb246-8f04-4bf2-a457-4ba09c7349de',
      authority: 'https://login.microsoftonline.com/44d9bf97-02ce-4a07-a40f-82073a59502a',
      redirectUri: 'http://localhost:3000',
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false,
    },
  };

  // export const loginRequest = {
  //   scopes: ["api://5cf60ecb-b4e5-460c-b91a-2659607d5387/admin"],
  // };
  export const loginRequest = {
    scopes: [
       "openid", "profile",
      "User.Read",
      "User.ReadBasic.All",
      "User.Read.All",
      "Directory.Read.All",
      "GroupMember.Read.All"
    ]
  };
  
  