module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src/tests'],
    collectCoverage: true,
    collectCoverageFrom: [
        './src/controllers/**',
        './src/services/**',
        './src/middlewares/**',
        './src/database/*'
    ],
    coveragePathIgnorePatterns: [
        "./src/middlewares/logRequestDetails.ts",
        "./src/database/db.ts",
    ],
    coverageThreshold: {
        global: {
            statements: 95.00,
            functions: 95.00,
            lines: 95.00
        }
    },
    coverageReporters: [
        'clover',
        'json',
        'lcov',
        'text',
        'text-summary'
    ]
};
