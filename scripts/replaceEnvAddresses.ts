const dotenv = require("dotenv");
const fs = require("fs");

type EnvsToReplace = {
  envName: string;
  envValue: string;
};

export function replaceEnvContractAddresses(
  envsToReplace: EnvsToReplace[],
  networkName: string
) {
  const envFileName = ".env";
  const envFile = fs.readFileSync(envFileName, "utf-8");
  const env = dotenv.parse(envFile);
  envsToReplace.forEach(({ envName, envValue }) => {
    env[`${envName}_${networkName}`.toUpperCase()] = envValue;
  });
  const newEnv = Object.entries(env).reduce((env, [key, value]) => {
    return `${env}${key}=${value}\n`;
  }, "");

  fs.writeFileSync(envFileName, newEnv);
  console.log("Env file updated with new contract addressess");
}
