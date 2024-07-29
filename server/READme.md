## Normal Setup

- install pnpm
- run `pnpm i`
- run `pnpm dev`
- run mongo container `docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass mongo`
- add env var `DATABASE_URL=mongodb://user:pass@localhost:27017` to .env

## Setup using bash script (for linux or macos)

- Run `chmod +x ./script.sh`.
- Run `bash script.sh` to execute the script.
