export const appColors = {
    white: '#FFFFFF',
    black: '#000000',
    // Histogram colors
    primaryBlue: '#3B82F6',
    primaryGreen: '#10B981',
    primaryPurple: '#8B5CF6',
    primaryRed: '#EF4444',
    primaryOrange: '#F59E0B',
    // Text colors
    darkGray: '#374151',
    lightGray: '#9CA3AF',
    // Background colors
    lightBackground: '#F9FAFB',
    darkBackground: '#1F2937',
};

export interface HistogramData {
    label: string;
    value: number;
}

// Sample data for demonstration
export const sampleData: HistogramData[] = [
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 45 },
    { label: 'Mar', value: 80 },
    { label: 'Apr', value: 30 },
    { label: 'May', value: 90 },
    { label: 'Jun', value: 55 },
    { label: 'Jul', value: 75 },
];

export const salesData: HistogramData[] = [
    { label: 'Q1', value: 120 },
    { label: 'Q2', value: 180 },
    { label: 'Q3', value: 150 },
    { label: 'Q4', value: 200 },
];

export const userEngagementData: HistogramData[] = [
    { label: 'Mon', value: 45 },
    { label: 'Tue', value: 60 },
    { label: 'Wed', value: 35 },
    { label: 'Thu', value: 80 },
    { label: 'Fri', value: 70 },
    { label: 'Sat', value: 25 },
    { label: 'Sun', value: 15 },
];

// Chart configurations
export const chartConfigs = {
    monthlySales: {
        title: 'Monthly Sales',
        width: 'screenWidth - 40',
        height: 300,
        barColor: appColors.primaryBlue,
        textColor: appColors.darkGray,
        axisColor: appColors.lightGray,
        showValues: true,
    },
    quarterlyRevenue: {
        title: 'Quarterly Revenue',
        width: 'screenWidth - 40',
        height: 250,
        barColor: appColors.primaryGreen,
        textColor: appColors.darkGray,
        axisColor: appColors.lightGray,
        showValues: true,
        maxValue: 250,
    },
    userEngagement: {
        title: 'User Engagement',
        width: 'screenWidth - 40',
        height: 280,
        barColor: appColors.primaryPurple,
        textColor: appColors.darkGray,
        axisColor: appColors.lightGray,
        showValues: false,
    },
};
