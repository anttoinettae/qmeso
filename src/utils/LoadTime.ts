import {useEffect} from "react";

export const useReportPageLoadMetrics = (
    reportLoadTime: (time: number) => void
) => {
    useEffect(() => {
        new PerformanceObserver((observedEntries) => {
            let entry = observedEntries.getEntriesByType('navigation')[0]
            reportLoadTime(entry.duration)
        }).observe({
            type: 'navigation',
            buffered: true
        })
    }, [])
}