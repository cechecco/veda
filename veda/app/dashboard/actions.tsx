"use server"

export interface Feature {
    id: string
    name: string
    description: string
    parentId: string | null
    type: "project" | "feature"
}

const data: Feature[] = [
    {
        "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "name": "TaskFlow",
        "description": "TaskFlow is an innovative workflow management software designed to streamline and automate daily tasks within companies and project teams. By leveraging artificial intelligence, TaskFlow learns user preferences, suggests best practices, and automates repetitive tasks, enabling teams to focus on strategic activities. The platform allows the creation and management of visual workflows, where each step is linked to measurable objectives and dynamic deadlines. TaskFlow supports real-time collaboration, intelligent task assignment based on skills, and progress monitoring through customizable dashboards. Integrated with popular tools such as Slack, Trello, and Google Workspace, TaskFlow seamlessly fits into any team's workflow, providing an advanced automation engine that can perform automatic updates, send notifications, or generate weekly reports. Furthermore, TaskFlow features a continuous learning system that analyzes previous project data to suggest improvements to workflows, enhancing productivity and reducing time wastage.",
        "parentId": null,
        "type": "project"
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Project Manager Pro",
        "description": "Project Manager Pro is a comprehensive project management solution built to handle complex multi-phase projects across different industries. It enables teams to plan, execute, and track project milestones with precision. The software supports detailed Gantt charts, resource allocation, and risk assessment tools. One of the standout features is its seamless integration with third-party software like Jira and Asana, allowing users to import and synchronize existing projects effortlessly. The reporting engine generates in-depth reports with key performance indicators (KPIs) and progress summaries. Designed for large-scale projects, Project Manager Pro simplifies the process of managing teams, budgets, timelines, and deliverables all in one place.",
        "parentId": null,
        "type": "project"
    },
    {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "Automated Reporting Engine",
        "description": "The Automated Reporting Engine within TaskFlow is designed to gather, process, and deliver insightful reports automatically at scheduled intervals or upon specific triggers. The system pulls data from various connected platforms and generates tailored reports in multiple formats such as PDF, Excel, and CSV. It supports customizable report templates, enabling teams to focus on the metrics that matter most, whether it's project milestones, team performance, or resource utilization. This feature is powered by an AI-driven engine that analyzes data trends and provides actionable recommendations for future tasks. The flexibility of this engine allows for integration into larger business intelligence tools, making it a valuable asset for data-driven decision-making.",
        "parentId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "type": "feature"
    },
    {
        "id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        "name": "Real-Time Collaboration Hub",
        "description": "The Real-Time Collaboration Hub in TaskFlow is a fully integrated platform that allows teams to collaborate on projects in real time, regardless of their location. This hub supports features such as file sharing, instant messaging, and task co-editing. With integrated video conferencing and whiteboard functionalities, it creates a virtual workspace that bridges the gap between remote and in-office teams. Additionally, the collaboration hub ensures version control, making it easy to track changes, comment on progress, and revert to previous versions of tasks or documents. The AI assists by suggesting contributors based on their skill sets and past involvement in similar projects, making collaboration not only seamless but also efficient.",
        "parentId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "type": "feature"
    },
    {
        "id": "8f14e45f-ceea-467a-9575-6c9b3e4f2f2a",
        "name": "Budget Tracking and Forecasting",
        "description": "Budget Tracking and Forecasting is a key feature in Project Manager Pro that allows teams to monitor their project expenses in real time while also projecting future costs based on current spending patterns. This feature integrates with financial tools like QuickBooks and SAP to pull in actual expense data, providing a clear comparison between projected and actual budgets. Users can set financial milestones, monitor expenditures, and receive alerts when costs approach budget limits. The forecasting engine uses historical data and AI predictions to estimate future expenses, ensuring that projects stay on track and within budget. It also allows stakeholders to create what-if scenarios to simulate different budget outcomes.",
        "parentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "type": "feature"
    },
    {
        "id": "c9f0f895-fb98-4d44-9695-b77b6a99aa4b",
        "name": "AI-Driven Cost Optimization",
        "description": "AI-Driven Cost Optimization is an advanced sub-module within Budget Tracking and Forecasting that utilizes machine learning algorithms to identify areas where costs can be reduced without compromising project quality. The system analyzes expense data from multiple projects, comparing performance, timelines, and resources to suggest ways to streamline operations. The AI learns from previous projects and adapts to changing conditions, ensuring that the cost recommendations are always up-to-date. By leveraging predictive analytics, this feature can forecast the financial impact of certain decisions before they are made, offering detailed simulations of cost-saving measures over time.",
        "parentId": "8f14e45f-ceea-467a-9575-6c9b3e4f2f2a",
        "type": "feature"
    },
    {
        "id": "d3d9446f-e889-4aa5-a49f-176e5b7e7f7d",
        "name": "Scenario Analysis and Simulation",
        "description": "Scenario Analysis and Simulation allows project managers to test different financial and operational strategies within the AI-Driven Cost Optimization tool. This feature enables users to create hypothetical situations where different budget allocations, resource levels, or deadlines are adjusted. The AI simulates the potential outcomes of these changes, providing comprehensive reports that include projected timelines, risk levels, and cost implications. By comparing different scenarios, users can make informed decisions about the most effective strategies for reducing costs while maintaining high productivity.",
        "parentId": "c9f0f895-fb98-4d44-9695-b77b6a99aa4b",
        "type": "feature"
    },
    {
        "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        "name": "Deep Learning Analytics",
        "description": "Deep Learning Analytics is a sub-component of the Automated Reporting Engine. It employs neural networks to analyze complex data patterns across multiple projects. This feature goes beyond basic reporting by identifying hidden correlations in project performance metrics, enabling project managers to optimize workflows more effectively. By continuously learning from the data generated by ongoing projects, it adapts over time to provide more accurate predictions and recommendations. Deep Learning Analytics integrates with external data sources, enhancing its capability to make decisions based on broader market or industry trends.",
        "parentId": "550e8400-e29b-41d4-a716-446655440000",
        "type": "feature"
    },
    {
        "id": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
        "name": "Predictive Resource Allocation",
        "description": "Predictive Resource Allocation, part of the Real-Time Collaboration Hub, uses historical data and AI-driven algorithms to predict the optimal allocation of resources across ongoing projects. It considers variables such as team member availability, skills, project deadlines, and current workload to ensure that resources are distributed efficiently. The system also provides real-time adjustments based on changing project conditions, automatically reallocating resources to high-priority tasks as needed. This feature helps prevent over-allocation or underutilization of team members, maximizing productivity while minimizing delays.",
        "parentId": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        "type": "feature"
    },
    {
        "id": "e4e87cb2-8e9a-4749-abb6-26c59344dfee",
        "name": "Dynamic Workforce Management",
        "description": "Dynamic Workforce Management is an advanced tool within Predictive Resource Allocation that provides real-time data on team performance, task completion rates, and workforce availability. It can analyze workload distribution and suggest changes to team compositions or schedules to improve efficiency. This feature integrates with HR systems to pull in employee data, tracking skills, availability, and certifications to ensure that the right person is assigned to the right task. The system automatically detects bottlenecks and reallocates resources to balance workloads across teams.",
        "parentId": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
        "type": "feature"
    }
]


const getFeature = async (id: string): Promise<Feature | null> => {
    return data.find(feature => feature.id === id) || null
}

const getFeatures = async (parentId: string | null): Promise<Feature[]> => {
    return data.filter(feature => feature.parentId === parentId)
}

export { getFeature, getFeatures }