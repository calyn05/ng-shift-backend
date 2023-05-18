const admin = require("firebase-admin");
const serviceAccount = require("../../firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

const helloUser = (_req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello user from the Ng-Shift backend!");
};

const getAllUsers = async (_req: any, res: { send: (arg0: any) => void }) => {
  await admin
    .auth()
    .listUsers()
    .then((listUsersResult: any) => {
      res.send(listUsersResult.users);
    })
    .catch((error: any) => {
      res.send(error);
    });
};

const getUser = async (
  req: { params: { id: any } },
  res: { send: (arg0: any) => void }
) => {
  await admin
    .auth()
    .getUser(req.params.id)
    .then((userRecord: any) => {
      res.send(userRecord.toJSON());
    })
    .catch((error: any) => {
      res.send(error);
    });
};

const modifyEmail = async (
  req: { params: { id: any }; body: { email: any } },
  res: { send: (arg0: any) => void }
) => {
  await admin
    .auth()
    .updateUser(req.params.id, {
      email: req.body.email,
    })
    .then((userRecord: any) => {
      res.send(userRecord.toJSON());
    })
    .catch((error: any) => {
      res.send(error);
    });
};

const modifyPassword = async (
  req: { params: { id: any }; body: { password: any } },
  res: { send: (arg0: any) => void }
) => {
  await admin
    .auth()
    .updateUser(req.params.id, {
      password: req.body.password,
    })
    .then((userRecord: any) => {
      res.send(userRecord.toJSON());
    })
    .catch((error: any) => {
      res.send(error);
    });
};

const deleteUser = async (
  req: { params: { id: any } },
  res: { send: (arg0: any) => void }
) => {
  await admin
    .auth()
    .deleteUser(req.params.id)
    .then(() => {
      res.send("User deleted");
    })
    .catch((error: any) => {
      res.send(error);
    });
};

export default {
  helloUser,
  getAllUsers,
  getUser,
  modifyEmail,
  modifyPassword,
  deleteUser,
};
