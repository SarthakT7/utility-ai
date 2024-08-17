const BASE_URL = 'https://backend-blue-tree-8948.fly.dev/utility-ai'

export const postEmailProofRead = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/email-proofread`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const postGenerateJson = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/generate-json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const postCheckGrammar = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/check-grammar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};