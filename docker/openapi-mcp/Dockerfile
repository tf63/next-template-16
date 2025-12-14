FROM node:22.12.0-bookworm-slim

WORKDIR /app

COPY . .

RUN ORVAL_VERSION=$(npm pkg get devDependencies.orval | tr -d '"') \
 && MCP_VERSION=$(npm pkg get devDependencies.@modelcontextprotocol/sdk | tr -d '"') \
 && TSX_VERSION=$(npm pkg get devDependencies.tsx | tr -d '"') \
 && rm -f package.json \
 && npm install \
      @modelcontextprotocol/sdk@${MCP_VERSION} \
      tsx@${TSX_VERSION} \
      orval@${ORVAL_VERSION}

RUN npx orval -c configs/orval/orval.config.mcp.ts

CMD ["npx", "tsx", "tmp/mcp/server.ts"]
