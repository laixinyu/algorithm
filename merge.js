var merge = function (nums1, m, nums2, n) {
    let x = 0;
    let y = 0;
    nums1.splice(m, nums1.length);
    nums2.splice(n, nums2.length);
    while (y < n) {
        if (nums2[y] < nums1[x] || nums1[x] === undefined) {
            nums1.splice(x, 0, nums2[y]);
            x++;
            y++
        } else {
            x++;
        }
    }
    return nums1
}