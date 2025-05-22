import React, { useState, useEffect } from 'react'
import ResultLoader from '../component/Car-Component/ResultLoader'

const CarResult = () => {
    const [loading, setLoading] = useState(false)

    // Simulate loading time
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='relative'>
            {loading ? (
                <ResultLoader />
            ) : (
                <div className='p-5'>
                    <h1>This is result car page</h1>
                </div>
            )}
        </div>
    )
}

export default CarResult
