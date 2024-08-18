
# Memory Optimization in Node.js with TypeScript

This project demonstrates how to optimize memory usage in Node.js when working with large files by comparing two approaches: a traditional method and a generator-based method.

## Project Structure

- **src/script_without_generator.ts**: Reads an entire large file into memory using `fs.readFileSync`, splits it by lines, and processes it.
- **src/script_with_generator.ts**: Uses `fs.createReadStream` and the `split2` package to stream and process the file line by line, optimizing memory usage.

## Usage

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alimansoori71/memory-optimization.git
   cd memory-optimization
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Scripts

1. Compile the TypeScript files:
   ```bash
   npm run build
   ```

2. Run the script without generators:
   ```bash
   npm run start:without-generator
   ```

3. Run the script with generators:
   ```bash
   npm run start:with-generator
   ```

## Results

- The script using the traditional method (`script_without_generator.ts`) shows significantly higher memory usage when reading the large file.
- The generator-based script (`script_with_generator.ts`) demonstrates lower memory usage, making it more efficient for handling large files.

## Conclusion

Using generators and streaming in Node.js can greatly reduce memory consumption, especially when processing large datasets. This project highlights the importance of choosing the right approach to optimize performance in real-world applications.

## License

This project is licensed under the MIT License.
