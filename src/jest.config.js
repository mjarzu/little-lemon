module.exports = {
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
