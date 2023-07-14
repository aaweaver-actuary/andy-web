import Navigation from '../components/Navigation.component';
import PageHeading from '../components/PageHeading.component';

const CommentUpdate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-10">
        <PageHeading title="Comment Update" />

        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <section
              className="mt-5"
              aria-labelledby="notes-title"
            >
              <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                <div className="bg-gray-50 px-4 py-6 sm:px-6">
                  <div className="flex space-x-3">
                    <div className="min-w-0 flex-1">
                      <div>
                        <label
                          for="comment"
                          className="sr-only"
                        >
                          About
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows="3"
                          className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Add comment"
                        ></textarea>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommentUpdate;
