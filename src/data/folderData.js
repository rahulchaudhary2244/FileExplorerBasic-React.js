export default {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        { id: 3, name: "file.txt", isFolder: false, items: [] },
        {
          id: 4,
          name: "public nested 1",
          isFolder: true,
          items: [
            { id: 5, name: "index.txt", isFolder: false, items: [] },
            { id: 6, name: "index.html", isFolder: false, items: [] }
          ]
        },
        { id: 7, name: "image.png", isFolder: false, items: [] }
      ]
    }
  ]
};
