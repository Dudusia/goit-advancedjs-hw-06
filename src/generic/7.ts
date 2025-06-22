export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
type RoleDescriptionRecord = Record<UserRole, string>;

const RoleDescription: RoleDescriptionRecord = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

export {};
