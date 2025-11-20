# Replication steps

- `npm i`
- `npm test` # Headless mode; vitest 4.0.9 works.
- `npx npm-check-updates -u` # Upgrade to 4.0.10+ # 4.0.10 first version that is no longer working.
- `npm test` # now it fails
- `npm test -- --browser.headless=false` # it still works in non-headless mode
