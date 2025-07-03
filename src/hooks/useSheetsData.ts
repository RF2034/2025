// hooks/useSheetsData.ts
'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export interface SheetData {
  name: string
  comment: string
  socialUrl?: string
  iconUrl?: string
}

interface UseSheetsDataReturn {
  data: SheetData[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
  lastUpdated: Date | null
}

export const useSheetsData = (intervalMinutes: number = 5): UseSheetsDataReturn => {
  const [data, setData] = useState<SheetData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isActiveRef = useRef<boolean>(true)

  // データ取得関数
  const fetchData = useCallback(async () => {
    // ページが非アクティブの場合はスキップ
    if (!isActiveRef.current) return

    try {
      setError(null)
      
      const response = await fetch('/api/sheets', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: SheetData[] = await response.json()
      setData(result)
      setLastUpdated(new Date())
      
    } catch (err) {
      console.error('Error fetching sheets data:', err)
      setError(err instanceof Error ? err.message : 'データの取得に失敗しました')
    } finally {
      setLoading(false)
    }
  }, [])

  // ページの可視性を監視
  useEffect(() => {
    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden
      
      // ページがアクティブになった時にデータを更新
      if (!document.hidden && data.length > 0) {
        fetchData()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [fetchData, data.length])

  // 初回データ取得と定期更新の設定
  useEffect(() => {
    // 初回データ取得
    fetchData()

    // 定期更新の設定（5分間隔）
    const intervalMs = intervalMinutes * 60 * 1000
    intervalRef.current = setInterval(() => {
      fetchData()
    }, intervalMs)

    // クリーンアップ
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [fetchData, intervalMinutes])

  // 手動更新関数
  const refetch = useCallback(async () => {
    setLoading(true)
    await fetchData()
  }, [fetchData])

  return {
    data,
    loading,
    error,
    refetch,
    lastUpdated
  }
}