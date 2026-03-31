# Data Management Guide

This guide explains how to manage projects and members for the SRG Website using the JSON files in the `src/data` directory.

## File Structure

The data is split into two files to avoid duplicating information:
1.  **`members.json`**: The central registry of all team members. A member is only defined here once.
2.  **`projects.json`**: The list of projects. Each project contains an array linking members to their specific roles for that project.

---

## Managing Members (`src/data/members.json`)

If a new person joins a project, **add them here first**.

### Member Schema

```json
{
  "id": "firstname-lastname",
  "name": "Firstname Lastname",
  "photo": null,
  "status": "member"
}
```

*   `id`: (string) A URL-friendly, lowercase slug (e.g., `"brian-caube"`). **This must be unique** and is used to link the member in `projects.json`.
*   `name`: (string) Their full display name.
*   `photo`: (string | null) Path to their photo (e.g., `"/images/members/brian.jpg"`). Keep as `null` to use the default placeholder.
*   `status`: (string) Their standing in the organization. Use `"member"` or `"intern"`.

---
## ========================================== PROJECTS ========================================================

## Managing Projects (`src/data/projects.json`)

### Adding a New Project

Copy an existing block or use this template:

```json
{
  "id": 10,
  "title": "New Project Title",
  "subtitle": "Project Subtitle",
  "description": "First paragraph.\n\nSecond paragraph.",
  "image": null,
  "contributors": [],
  "features": []
}
```

*   `id`: (number) Unique numeric ID. Needed for URL routing (`/projects/10`).
*   `description`: (string) To create multiple paragraphs, use double newlines (`\n\n`) within the string. **Do not press Enter to create a new line in the JSON file itself.**

### Linking Members to Projects (Contributors)

In the project's `"contributors"` array, add entries that map `memberId` to the `roles` they had on that specific project.

```json
"contributors": [
  { "memberId": "brian-caube", "roles": ["Frontend Developer"] },
  { "memberId": "crystalyn-danga", "roles": ["Project Manager", "Business Analyst"] }
]
```

*   `memberId`: **Must exactly match** the `"id"` field from `members.json`.
*   `roles`: (Array of strings) A list of roles they held. If they had multiple roles, add multiple strings. They will be displayed together (e.g., "Project Manager / Business Analyst").

### Adding Features & Functionalities

In the project's `"features"` array, add objects with the following properties:

```json
"features": [
  {
    "icon": "CpuChipIcon",
    "name": "AI-Guided Interviews",
    "description": "Structured, program-based questions with intelligent follow-ups..."
  }
]
```

*   `icon`: (string) The exact component name from `@heroicons/react` (e.g., `"CpuChipIcon"`, `"SparklesIcon"`).
*   `name`: (string) The title of the feature.
*   `description`: (string) A short explanation of the feature.

### Note about `teamSize`
You do not need to manually configure the `teamSize` of a project. The UI automatically calculates it based on the number of items in the `contributors` array.
