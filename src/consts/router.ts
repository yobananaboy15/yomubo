export const Paths = Object.freeze({
  HOME: "/",
  VOTING: (id?: string) => (id ? `voting/${id}` : "voting"),
});
