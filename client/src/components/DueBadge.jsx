const DueBadge = ({ dueDate, status }) => {
  if (!dueDate) return null;
  // If task is completed/submitted, no urgency needed
  if (status === 'Submitted' || status === 'Approved') return null;

  const due = new Date(dueDate);
  if (isNaN(due.getTime())) return null;

  const now = new Date();
  
  // Set times to midnight for accurate day difference
  const dueDay = new Date(due.getFullYear(), due.getMonth(), due.getDate());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  const diffTime = dueDay.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) {
    return (
      <span className="inline-flex items-center px-1.5 py-[2px] rounded text-[10px] font-bold bg-danger/10 text-danger border border-danger/20 uppercase tracking-wider ml-2 shrink-0">
        Overdue
      </span>
    );
  }
  
  if (diffDays === 0 || diffDays === 1) {
    return (
      <span className="inline-flex items-center px-1.5 py-[2px] rounded text-[10px] font-bold bg-warning/10 text-warning border border-warning/20 uppercase tracking-wider ml-2 shrink-0">
        Due Soon
      </span>
    );
  }

  return null;
};

export default DueBadge;
