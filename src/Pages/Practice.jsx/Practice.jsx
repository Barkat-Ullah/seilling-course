{/* <div   classNameNameName="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div   classNameNameName="flex items-center justify-center w-12 bg-red-500">
        <svg   classNameNameName="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
        </svg>
    </div>

    <div   classNameNameName="px-4 py-2 -mx-3">
        <div   classNameNameName="mx-3">
            <span   classNameNameName="font-semibold text-red-500 dark:text-red-400">Error</span>
            <p   classNameNameName="text-sm text-gray-600 dark:text-gray-200">
               {reError}
            </p>
        </div>
    </div>
</div> */}

<label for="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>

<h2 className="mx-3 text-gray-400">Profile Photo</h2>

<input id="dropzone-file" type="file" className="hidden" />
</label>