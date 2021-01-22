const trickyOperation = async () => {
  await fs.promises.readFile("test.js");
};
const retryOperation = async () => {
  const retryAttempts = 5;
  const retryWaitms = 3000;

  for (let attempt = 0; attempt <= retryAttempts; attempt++) {
    try {
      await trickyOperation();
      console.log("read file");
    } catch (err) {
      console.log("read failed: " + err.message);
      console.log("retrying read,");
      await setTimeoutPromise(retryWaitms);
      continue;
    }

    break;
  }
};

const retryOperation2 = () => {
  const retryAttempts = 5;
  const retryWaitms = 3000;

  //need to terminate loop
  const promise = new Promise((resolve, reject) => {
    let attempt = 0;
    const attemptIt = () => {
      if (attempt > retryAttempts) {
        reject(newError("retries exceeded"));
        return;
      }
    };
    trickyOperation()
      .then(() => {
        console.log("finished reading file");
        resolve();
      })
      .catch((err) => {
        console.log("read failed: " + err.message);
        console.log("retrying read.");
        setTimeout(() => {
          attempt++;
          attempt();
        }, retryWaitms);
      });
    attemptIt();
  });
};

retryOperation();
