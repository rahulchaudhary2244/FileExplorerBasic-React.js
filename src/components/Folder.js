import { useState } from "react";

export default function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  return (
    <>
      {explorer.isFolder && (
        <div style={{ cursor: "pointer" }}>
          <div onClick={() => setExpand(!expand)}>
            <span>{`🗂️ ${explorer.name}`}</span>
          </div>
          {expand && (
            <div style={{ marginLeft: "20px" }}>
              {explorer.items.map((item) => {
                return (
                  <span key={item.id}>
                    <Folder explorer={item} />
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}

      {!explorer.isFolder && (
        <div style={{ cursor: "default" }}>
          <span>{`📁 ${explorer.name}`}</span>
        </div>
      )}
    </>
  );
}
