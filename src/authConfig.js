export const msalConfig = {
    auth: {
      clientId: 'd5e118cf-c3e4-444e-a572-c42229cbfc46',
      // authority: 'https://login.microsoftonline.com/44d9bf97-02ce-4a07-a40f-82073a59502a',
      authority: "https://login.microsoftonline.com/44d9bf97-02ce-4a07-a40f-82073a59502a/v2.0",
      redirectUri: 'http://localhost:3000',
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true,
    },
  };

  // export const loginRequest = {
  //   scopes: ["api://5cf60ecb-b4e5-460c-b91a-2659607d5387/admin"],
  // };
  export const loginRequest = {
    scopes: ["api://200b6d4a-95b4-404b-b1ff-4be4b740eb60/access_as_admin"]
  };
  
  