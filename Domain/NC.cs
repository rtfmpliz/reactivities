using System;

namespace Domain
{
    public class NC
    {
        public Guid Id { get; set; }
        #nullable enable
        public string? NCStatement { get; set; }

        public string? RequirementClauseNo { get; set; }
        public string? RequirementDoc { get; set; }
        public string? ObjEvidence { get; set; }
        public string? Justify { get; set; }
        public string? DocReference { get; set; }
        public string? DocRevDate { get; set; }
        public int? DocRevNo { get; set; }
        

    }
}