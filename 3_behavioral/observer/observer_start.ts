// TODO: When a user logged-in, display a toast message, fetch permissions and redirect to dashboard
// TODO: When a user logged-out, display a toast message, redirect to login page

// TODO BONUS: When a user logged-in, display the user name in a navbar component (non exist yet)
// TODO BONUS: When a user logged-in, display the user name in a navbar component (non exist yet)

/**
 * Responsible for auth logic
 */
class Auth {
  private _currentUser: any;

  constructor() {
    this._currentUser = null;
  }

  get currentUser(): any {
    return this._currentUser;
  }

  signIn() {
    this._currentUser = {name: "Nir"};
  }

  signOut() {
    this._currentUser = null;
  }
}

/**
 *  UI for displaying a message on the screen
 */
class ToastMessage {
  showToast(message: string) {
    console.log('Display toast message: ' + message);
  }
}

/**
 * Responsible for fetching a set of permissions for
 * A specific User
 */
class PermissionManager {
  getPermissionsForUser(user: any) {
    console.log('Fetching permissions for: ' + user);
  }
}

/**
 * Responsible for routing and redirects
 */
class Router {
  redirectTo(routeName: string) {
    console.log('Redirectong to' + routeName);
  }
}
