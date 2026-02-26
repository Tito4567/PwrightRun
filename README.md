Playwright SDET CI/CD Pipeline: Project Overview
Developed by: Gilberto Rose
Credentials: B.S. Computer Science | U.S. Army Veteran | ISTQB Certified
Core Objective
This framework serves as a "Continuous Testing" engine. Rather than running tests manually on a local machine, this project demonstrates a fully automated, cloud-based pipeline designed for high-frequency feedback in a 2026 DevOps environment.
The Technical Stack
Automation Framework: Playwright (Node.js)
Design Pattern: Page Object Model (POM) for maximum maintainability.
Infrastructure: GitHub Actions (Linux-based cloud containers).
Execution: Headless execution for speed and resource efficiency.
Automated Reliability (CI/CD)
The defining feature of this repository is the Automated Reliability Engine. I have configured a GitHub Actions Cron Job that ensures the system validates application health without human intervention.
Execution Schedule: Daily at 3:00 AM EST.
The Goal: To provide a "Green Build" status and a full diagnostic report before the start of the business day.
Manual Overrides: The pipeline supports workflow_dispatch, allowing QA or Dev teams to trigger a full smoke test on-demand during deployment windows.
Future Roadmap: Self-Healing AI Implementation
To address the industry-wide issue of "brittle tests," I am currently architecting a Self-Healing AI Locator module for this framework.
How it works:
Failure Detection: If a primary selector (CSS/XPath) fails due to a UI change, the test won't immediately error out.
Heuristic Analysis: The framework will utilize a heuristic AI model to scan the DOM tree and compare attributes (text content, proximity, and object ID).
Dynamic Recovery: The system will identify the "most likely" candidate for the element, update the locator in memory, and complete the test execution.
Actionable Intelligence: The system logs the "Healed" locator as a warning, allowing me to proactively refactor the code without blocking the CI/CD pipeline.
How to Run This Project
Install Dependencies: npm install
Run All Tests: npx playwright test
View Results: npx playwright show-report
