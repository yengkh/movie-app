type Props = {
  showDialog: boolean;
  setShowdialog: (value: boolean) => void;
};
const CommendDialog = ({ showDialog, setShowdialog }: Props) => {
  return (
    <div
      className={`${showDialog ? "" : "hidden"} relative z-30`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed mt-48 inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-containerBackgroundColor px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 "
                    id="modal-title"
                  >
                    Write your comment
                  </h3>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      className=" bg-bodyBackgroundColor outline-none rounded-sm resize-none"
                      rows={5}
                      cols={45}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-containerBackgroundColor px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex mr-3 w-full justify-center rounded-md bg-bodyBackgroundColor px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto"
              >
                Post
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md  bg-red-600 px-3 py-2 text-sm font-semibold text-textColor ring-1 ring-inset   sm:mt-0 sm:w-auto"
                onClick={() => setShowdialog(!showDialog)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommendDialog;
