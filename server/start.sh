# Create the .data directory if it doesn't already exist
mkdir -p .data

# Create the transactions.json file if it doesn't already exist, and add the value {"blockNumber": 0} to it
echo '{"blockNumber": 0}' > .data/transactions.json

# Run the init.js script
node init/init.js