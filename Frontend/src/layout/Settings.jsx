function Settings() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6">
        Settings
      </h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

        <div className="mb-4">
          <label className="text-white block mb-2">
            Username
          </label>

          <input
            className="w-full bg-zinc-800 rounded-xl p-3 text-white"
            value="Srijit"
            readOnly
          />
        </div>

      </div>
    </>
  );
}

export default Settings;