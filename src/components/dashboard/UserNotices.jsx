import NoticeCard from "./NoticeCard";

function UserNotices({ notices, deleteNotice }) {
  return (
    <section className="user-notices">
      <h2>Your Notices</h2>

      {notices.length === 0 ? (
        <p className="empty-text">
          No notices posted yet.
        </p>
      ) : (
        <div className="notice-grid">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
              deleteNotice={deleteNotice}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default UserNotices;