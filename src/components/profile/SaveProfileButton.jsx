function SaveProfileButton({ onSave, loading }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onSave}
        disabled={loading}
        className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}

export default SaveProfileButton;