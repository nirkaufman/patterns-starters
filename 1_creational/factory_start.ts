// todo: you can create different type of organizers
// simply the creation process


enum Permission {
  CREATE = 'CREATE',
  DELETE = 'DELETE',
  PUBLISH = 'PUBLISH',
  EDIT = 'EDIT',
  CONTACT = "CONTACT"
}

enum MemberRoles {
  ORGANIZER = 'ORGANIZER',
  CO_ORGANIZER = 'CO_ORGANIZER',
  ASSISTANT_ORGANIZER = 'ASSISTANT_ORGANIZER',
  EVENT_ORGANIZER = 'EVENT_ORGANIZER'
}

class Organizer {
  // organizer get all available permissions
  constructor() {}
}

class CoOrganizer {
  constructor(permissions: Permission[]) {}
}

class AssistantOrganizer {
  constructor(permissions: Permission[]) {}
}

class EventOrganizer {
  constructor(permissions: Permission[]) {}
}
