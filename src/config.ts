const Config = () => {
  return {
    ApiEnv: {
      apiKey: process.env.REACT_APP_DEV_API_KEY
    }
  }
}
export const ApiEnv = Config().ApiEnv