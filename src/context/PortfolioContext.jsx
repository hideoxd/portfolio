import { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

const defaultPortfolioData = {
    personal: {
        name: 'Loading...',
        title: '',
        tagline: '',
        bio: '',
        email: '',
        phone: '',
        location: '',
        gender: '',
        avatar: '',
        resumeUrl: '#',
        socialLinks: {
            github: '',
            linkedin: '',
            twitter: '',
            instagram: '',
        },
    },
    about: {
        description: '',
        experience: '',
        projectsCompleted: '',
        happyClients: '',
        yearsOfExperience: '',
    },
    skills: [],
    projects: [],
    experience: [],
    education: [],
    services: [],
    testimonials: [],
};

export function PortfolioProvider({ children }) {
    const [portfolioData, setPortfolioData] = useState(defaultPortfolioData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch portfolio data from admin.json
        const fetchPortfolioData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/admin.json');

                if (!response.ok) {
                    throw new Error('Failed to load portfolio data');
                }

                const data = await response.json();
                setPortfolioData(data);
                setError(null);
            } catch (err) {
                console.error('Error loading portfolio data:', err);
                setError(err.message);
                // Keep default data on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchPortfolioData();
    }, []);

    return (
        <PortfolioContext.Provider
            value={{
                ...portfolioData,
                isLoading,
                error,
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export function usePortfolio() {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
}
