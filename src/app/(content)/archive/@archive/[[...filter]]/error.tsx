'use client'

interface FilterErrorProps {
  error: Error & { digest?: string };
}

const FilterError = ({error}:FilterErrorProps) => {
    return <div id="error">
        <h2>An error occurred!</h2>
        <p>{error.message}</p>
    </div>
}

export default FilterError