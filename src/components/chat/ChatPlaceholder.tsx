import React from "react";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">Azure OpenAI Playground</h1>
      </div>
    </div>
  );
}
