function NoticeCard({ notice, deleteNotice }) {
  return (
    <div className="notice-card">
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <button
        className="delete-btn"
        onClick={() => deleteNotice(notice.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default NoticeCard;