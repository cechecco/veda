"use server"

export interface Feature {
    id: string
    name: string
    description: string
    parentId: string | null
}

const data: Feature[] = [
    {
        id: "333",
        name: "Project 1",
        description: "Project 1 description",
        parentId: null
    },
    {
        id: "444",
        name: "Project 2",
        description: "Project 2 description",
        parentId: null
    },
    {
        id: "777",
        name: "Feature 1",
        description: "Feature 1 description",
        parentId: "333"
    },
    {
        id: "888",
        name: "Feature 2",
        description: "Feature 2 description",
        parentId: "333"
    },
    {
        id: "999",
        name: "Feature 3",
        description: "Feature 3 description",
        parentId: "444"
    }
]

const getFeature = async (id: string): Promise<Feature | null> => {
    return data.find(feature => feature.id === id) || null
}

const getFeatures = async (parentId: string | null): Promise<Feature[]> => {
    return data.filter(feature => feature.parentId === parentId)
}

export { getFeature, getFeatures }