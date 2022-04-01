export interface Authentication {
  Email: string;
  Password: string;
}

export interface FirebaseError extends Error {
  code: string;
}
