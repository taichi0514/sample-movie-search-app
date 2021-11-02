const Config = () => {
  return {
    ApiEnv: {
      endpoint: process.env.REACT_APP_DEV_ENDPOINT
    }
  }
}
export const ApiEnv = Config().ApiEnv