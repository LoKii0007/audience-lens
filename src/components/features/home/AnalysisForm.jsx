'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Youtube, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Input, Label, LabelInputContainer, BottomGradient } from './AnimatedInput';

export default function AnalysisForm() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(event) {
    setUrl(event.target.value);
    setStatus(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!url) {
        setStatus('error');
        return;
    }

    setIsLoading(true);

    // MOCK API CALL
    setTimeout(() => {
        if(url.includes("youtube.com") || url.includes("youtu.be")) {
            setIsLoading(false);
            setStatus('success');
            setUrl("");
        } else {
            setIsLoading(false);
            setStatus('error');
        }
    }, 2000);
  }

  return (
    <form className="w-full text-left" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-6">
        <Label htmlFor="url" className="text-slate-200 mb-2 pl-1">
          YouTube Video URL
        </Label>
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Input
            id="url"
            name="url"
            value={url}
            onChange={handleChange}
            placeholder="https://www.youtube.com/watch?v=..."
            type="text"
            autoComplete="off"
            className="relative bg-slate-900 border-slate-700 text-white pl-10 h-14"
            />
            <div className="absolute left-3 top-4 text-slate-500">
                <Youtube size={20} />
            </div>
        </div>
      </LabelInputContainer>

      {/* Status Messages */}
      <AnimatePresence>
        {status === 'error' && (
            <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-4 text-red-400 text-sm flex items-center gap-2 overflow-hidden bg-red-950/20 p-2 rounded border border-red-900/50"
            >
                <AlertCircle size={14} />
                <span>Please enter a valid YouTube URL.</span>
            </motion.div>
        )}
        {status === 'success' && (
             <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: 'auto', opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="mb-4 text-green-400 text-sm flex items-center gap-2 overflow-hidden bg-green-950/20 p-2 rounded border border-green-900/50"
         >
             <CheckCircle2 size={14} />
             <span>Analysis complete! Redirecting...</span>
         </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full mt-2">
        <button
          className="relative group/btn flex space-x-2 items-center justify-center text-white bg-slate-950 w-full h-14 rounded-lg font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] overflow-hidden border border-white/5 hover:bg-slate-900 transition-colors"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2 text-slate-300">
                 <svg aria-hidden="true" role="status" className="inline w-4 h-4 animate-spin text-slate-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#374151"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Processing...
            </div>
          ) : (
            <>
              Generate Insights &rarr;
            </>
          )}
          <BottomGradient />
        </button>
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/5 text-center">
         <p className="text-xs text-slate-500">
           Powered by AudienceLens. 
         </p>
      </div>
    </form>
  );
}