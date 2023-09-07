import "./ExpenseDate.css"


export default function ExpenseDate(props) {
    const date=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
    const month=props.date.toLocaleString('en-US',{month:'long'});

  return (
    <div className="expense-date">
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
