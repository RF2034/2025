'use client'

import RegistrationButton from "@/components/RegistrationButton";
import { useSheetsData } from "@/hooks/useSheetsData";

interface Participant {
  name: string;
  comment: string;
  twitterUrl?: string;
}

interface ParticipantsSectionProps {
  participants?: Participant[];
}

export default function ParticipantsSection({ participants = [] }: ParticipantsSectionProps) {
  const { data, loading, error } = useSheetsData(5); // 5分間隔で更新
  
  // APIから取得したデータを優先し、フォールバックとしてpropsを使用
  const displayParticipants = data.length > 0 ? data : participants;

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          現在の参加者
        </h2>
        
        {loading && displayParticipants.length === 0 ? (
          <div className="text-center">
            <span className="loading loading-spinner loading-md"></span>
            <p className="text-base-content/70 mt-2">参加者データを読み込み中...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-error mb-4">データの取得に失敗しました</p>
            <p className="text-base-content/70 text-sm">{error}</p>
          </div>
        ) : displayParticipants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayParticipants.map((participant, index) => (
              <div key={index} className="card bg-base-100 relative overflow-hidden">
                <div className="card-body">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="card-title text-lg">{participant.name}</h3>
                    {participant.twitterUrl && (
                      <a 
                        href={participant.twitterUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm btn-circle"
                        aria-label={`${participant.name}のXアカウント`}
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-4 h-4"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-base-content/80 leading-relaxed">
                    {participant.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-base-content/70 mb-4">
              参加者が登録されると、こちらに表示されます
            </p>
          </div>
        )}
        
        <div className="text-center mt-8">
          <p className="text-base-content/70 mb-4">
            あなたも一緒に参加しませんか？
          </p>
          <RegistrationButton size="md" />
        </div>
      </div>
    </section>
  );
}