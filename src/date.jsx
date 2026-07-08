function DateDisplay() {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        year: 'numeric'
    });

    return <p className="date"> 5 more habits left for today {formatted}</p>
}

export default DateDisplay;